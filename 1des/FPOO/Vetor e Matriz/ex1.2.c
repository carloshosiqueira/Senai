#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	//Váriaveis
	char nome[20];
	float nota1, nota2, nota3,nota4, nota5, media;
	int continuar;
	do{
		//Entrada
		printf("Digite o primeiro nome do aluno: ");
		scanf("%s",&nome);
		printf("Digite as 5 notas desse aluno separas por espaço: ");
		scanf("%f %f %f %f %f",&nota1, &nota2, &nota3, &nota4, &nota5);
		//Processamento
		media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
		//Saída
		printf("A media das notas de %s é de %.1f\n\n",nome, media);
		printf("Digite 1 para continuar usando o programa ou 0 para sair: ");
		scanf("\n %d",&continuar);
	}while(continuar);
	return 0;
}
