#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 5\n\n");
	int n, i;
	printf("Escreva um número inteiro maior que 0: ");
	scanf("%d",&n);

	for(i = 0; i <= n; i+=2)
		printf("%d\n",i);


	return 0;
}
