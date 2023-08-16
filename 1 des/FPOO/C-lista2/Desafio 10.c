#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	//Declaração de Variaveis
	char nome[50];
	float nota1,nota2,nota3;
	int sexo, continuar = 1;
	while (continuar){
	//Entrada
		printf("Qual o primeiro nome do aluno(a)? ");
		scanf("%s",&nome);
		printf("Digite as notas do aluno separadas por espaço: ");
		scanf("%f %f %f",&nota1, &nota2, &nota3);
		printf("Qual o sexo do aluno? 1.Homem 2.Mulher: ");
		scanf("%d",&sexo);
		//Processamento
		float media = (nota1 + nota2 + nota3) / 3;
		//Saída
		switch(sexo){
			case 1:
					if(media < 4)
						printf("O aluno %s está reprovado com uma média de %.1f\n",nome, media);
					else if (media < 6) printf("O aluno %s está de recuperação com uma média de %.1f\n",nome, media);
					else printf("O aluno %s está aprovado com uma média de %.1f\n",nome, media);
					printf("Digite 1 para prosseguir com o próximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
			case 2:
					if(media < 4)
						printf("A aluna %s está reprovada com uma média de %.1f\n",nome, media);
					else if (media < 6) printf("A aluna %s está de recuperação com uma média de %.1f\n",nome, media);
					else printf("A aluna %s está aprovada com uma média de %.1f\n",nome, media);
					printf("Digite 1 para prosseguir com o próximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
			default: 
					printf("Opção inválida, por favor digite 1 ou 2\n");
					printf("Digite 1 para prosseguir com o próximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
		}
	}
		return 0;	
}

