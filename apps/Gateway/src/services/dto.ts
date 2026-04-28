export class ServiceClientOutputDto<ContextDto> {
  context: ContextDto;
  status: 'SUCCEED' | 'FALID' | null;
  code: number;
  message: string;
  error: string;
  data?: any;
}
