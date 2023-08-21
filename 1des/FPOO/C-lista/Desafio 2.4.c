#include <stdio.h>
int main (){
	char time[30];
	int vitoria;
	int empates;
	printf("Qual o nome do time? ");
	scanf("%s",&time);
	printf("Quantas vitorias o time tem? ");
	scanf("%d",&vitoria);
	printf("Quantos empates o time tem? ");
	scanf("%d",&empates);
	int pontos = vitoria*3 + empates;
	printf("O time %s tem um total de %d pontos",time,pontos);
}
