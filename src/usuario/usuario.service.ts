import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'victor99dev',
      email: 'victor99dev@teste.com.br',
      senha: '123456',
      nomeCompleto: 'Victor99dev',
      dataDeEntrada: new Date(),
    },
  ];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    const usuarioEncontrado = this.usuarios.find(
      usuario => usuario.nomeDeUsuario == nomeDeUsuario,
    );

    return usuarioEncontrado;
  }
}
