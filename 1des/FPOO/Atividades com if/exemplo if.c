#include <stdio.h>
/* Programa que avalia as m�dias dos alunos*/
int main(){
	//Declara��o de Variaveis
	int media;
	//Entrada de Dados
	printf("Insira a m�dia do aluno de 0 a 100: ");
	scanf("%d",&media);
	//Processamento e saida com condicional
	if(media >= 50)
		printf("Aprovado");
	else if(media < 20)
		printf("Reprovado");
	else
		printf("Recuperacao");
	//Fim
	return 0;
}
