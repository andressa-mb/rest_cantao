export interface Feedback {
    id: number;
    nome: string;
    email: string;
    comentario: string;
    img: string;
    ativo: boolean;
    criado_em: Date;
}