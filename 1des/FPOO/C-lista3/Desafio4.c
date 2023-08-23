#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 4\n\n");
	int n1, n2,continuar, i;
	do{

	printf("Escreva o primeiro valor inteiro: ");
	scanf("%d",&n1);
	printf("Escreva um segundo valor inteiro diferente do primeiro: ");
	scanf("%d",&n2);
	
	while(n1 == n2){
		printf("Escreva um valor DIFERENTE para os valores:\n");
		printf("Valor1:");
		scanf("%d",&n1);
		printf("Valor2:");
		scanf("%d",&n2);
	}
	for(i = n1; i <= n2; i++){

		printf("%d\n",i);
	}
	for(i = n1; i >= n2; i--){
		printf("%d\n",i);
	}
		printf("Digite 1 para continuar e 0 para sair: ");
		scanf("%d",&continuar);
	}while(continuar == 1);
	

	return 0;
}
