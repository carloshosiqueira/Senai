//Esse n�o funciona
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	//V�riaveis
	char nome[20];
	float notas;
	float media = 0;
	int i, quantidade, continuar;
	do{
		//Entrada
		printf("Digite o primeiro nome do aluno: ");
		scanf("%s",&nome);
		printf("Quantas notas tem esse aluno? ");
		scanf("%d",&quantidade);
		printf("Digite as %d notas desse aluno: ",quantidade);
		for(i = 0; i < quantidade; i++);{
			scanf("%f",&notas);
			media += notas;
		}
		//Processamento
		media /= quantidade;
		//Sa�da
		printf("A media das notas de %s � de %.1f\n\n",nome, media);
		printf("Digite 1 para continuar usando o programa ou 0 para sair: ");
		scanf("%d",&continuar);
	}while(continuar);
	
	return 0;
}
