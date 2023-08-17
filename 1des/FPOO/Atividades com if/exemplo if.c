#include <stdio.h>
/* Programa que avalia as médias dos alunos*/
int main(){
	//Declaração de Variaveis
	int media;
	//Entrada de Dados
	printf("Insira a média do aluno de 0 a 100: ");
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
