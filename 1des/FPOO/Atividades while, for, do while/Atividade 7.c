#include <stdio.h>
int main (){
	int i;
	printf("Digite um valor inteiro para i: ");
	scanf("%d",&i);
	while(i != 14){
		printf("O dobro de %d = %d\ndigite um numero diferente para terminar o programa:	",i ,i*2);
		scanf("%d",&i);
	}
	if(i == 14){
		printf("Parabens, voce acertou o numero! o numero era %d",i);
		return 0;
	}
}
