#include <stdio.h>
int main(){
	char nome[50];
	float preco, preco5, preco7;
	printf("Qual o nome do produto? ");
	scanf("%s",&nome);
	printf("Qual o preco do produto? ");
	scanf("%f",&preco);
	preco5 = preco * 1.05; preco7 = preco * 1.07;
	if(preco < 1000)
		printf("O produto %s aumentou de preco em 5%% e agora custa %.2f",nome, preco5);
	else
		printf("O produto %s aumentou de preco em 7%% e agora custa %.2f",nome, preco7);
}
