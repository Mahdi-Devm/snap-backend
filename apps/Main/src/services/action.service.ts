import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { DriversService } from 'porviders/drivers.service';
import { ServiceClientActionInputDto, ServiceResponseData } from './dto';
@Injectable()
export class SelfActionService {
  constructor(private readonly driversService: DriversService) {}

  async findAndCall(
    data: ServiceClientActionInputDto,
  ): Promise<ServiceResponseData> {
    console.log(data, 'findAndCall');
    const providerName = data?.provider || null;
    const actionName = data?.action || null;
    if (!providerName || !actionName)
      throw new Error('err_service_noActionOrProvider');

    let provider: any;
    switch (providerName) {
      case 'DRIVERS':
        provider = this.driversService;
        break;

      default:
        provider = null;
    }
    if (!provider || !provider[actionName])
      throw new Error('err_service_actionNotFound');

    const response = await provider[actionName](
      _.pick(data, ['query', 'set', 'option']),
    );

    return {
      message: response?.message ?? 'Ok',
      data: response?.data ?? response,
    };
  }
}
