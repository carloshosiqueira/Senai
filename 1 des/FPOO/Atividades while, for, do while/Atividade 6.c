#include <stdio.h>
int main (){
	int i;
	printf("Digite um valor inteiro para i: ");
	scanf("%d",&i);
	do{
		printf("Digite um numero maior que %d para terminar o programa:",i);
		scanf("%d",&i);
	}while(i < 14);
	do{
		printf("Digite um numero menor que %d para terminar o programa:",i);
		scanf("%d",&i);
	}while (i > 14);
	if(i == 14){
		printf("Parabens, voce acertou o numero! o numero era %d",i);
		return 0;
	}
}
