#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	//Declara��o de Variaveis
	char nome[50];
	float nota1,nota2,nota3;
	int sexo, continuar = 1;
	while (continuar){
	//Entrada
		printf("Qual o primeiro nome do aluno(a)? ");
		scanf("%s",&nome);
		printf("Digite as notas do aluno separadas por espa�o: ");
		scanf("%f %f %f",&nota1, &nota2, &nota3);
		printf("Qual o sexo do aluno? 1.Homem 2.Mulher: ");
		scanf("%d",&sexo);
		//Processamento
		float media = (nota1 + nota2 + nota3) / 3;
		//Sa�da
		switch(sexo){
			case 1:
					if(media < 4)
						printf("O aluno %s est� reprovado com uma m�dia de %.1f\n",nome, media);
					else if (media < 6) printf("O aluno %s est� de recupera��o com uma m�dia de %.1f\n",nome, media);
					else printf("O aluno %s est� aprovado com uma m�dia de %.1f\n",nome, media);
					printf("Digite 1 para prosseguir com o pr�ximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
			case 2:
					if(media < 4)
						printf("A aluna %s est� reprovada com uma m�dia de %.1f\n",nome, media);
					else if (media < 6) printf("A aluna %s est� de recupera��o com uma m�dia de %.1f\n",nome, media);
					else printf("A aluna %s est� aprovada com uma m�dia de %.1f\n",nome, media);
					printf("Digite 1 para prosseguir com o pr�ximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
			default: 
					printf("Op��o inv�lida, por favor digite 1 ou 2\n");
					printf("Digite 1 para prosseguir com o pr�ximo aluno ou 0 para sair do programa\n\n");
					scanf("%d",&continuar);
					break;
		}
	}
		return 0;	
}

