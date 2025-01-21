export type ApiReponse<T> = {
    data: T,
    message: string;
    status: boolean;
}
