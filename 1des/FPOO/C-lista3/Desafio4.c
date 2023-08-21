#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 4\n\n");
	int n1, n2, i;
	printf("Escreva o primeiro valor inteiro: ");
	scanf("%d",&n1);
	printf("Escreva o segundo valor inteiro: ");
	scanf("%d",&n2);
	for(i = n1; i <= n2; i++)
		printf("%d\n",i);
	for(i = n1; i >= n2; i--)
		printf("%d\n",i);
	return 0;
}
