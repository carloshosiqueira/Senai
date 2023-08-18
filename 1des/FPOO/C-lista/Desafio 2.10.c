#include <stdio.h>
int main(){
	char cidade[50];
	float eleitores;
	float votos;
	printf("Insira o nome da cidade: ");
	scanf("%s",&cidade);
	printf("Insira a quantidade total de eleitores: ");
	scanf("%f",&eleitores);
	printf("Insira a quantidade total de votos: ");
	scanf("%f",&votos);
	float participacao = eleitores / votos *100;
	printf("A cidade %s teve uma participacao de %.2f dos votos",cidade,participacao);
}
