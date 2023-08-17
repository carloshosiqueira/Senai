#include <stdio.h>
int main (){
	int i;
	printf("Digite um valor inteiro de 1 a 100 para i: ");
	scanf("%d",&i);
	do{
		printf("Digite um numero diferente de %d para terminar o programa:",i);
		scanf("%d",&i);
	}while(i < 14 && i > 14);
	do{
		printf("Parabens, voce acertou o numero! o numero era %d",i);
	}while(i ==14);
		return 0;
}
