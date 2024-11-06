export class CustomError_Class extends Error {
  response?: {
    data: any;
    status: number;
    headers: string;
  };
}
// TODO : 커스텀 에러 클래스 정의 다시해야함
