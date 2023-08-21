#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 3\n\n");
	int i, n;
	printf("Escreva um valor inteiro maior que 0: ");
	scanf("%d",&n);
	for(i = 0; i <= n; i++)
		printf("%d\n",i);
	return 0;
}
