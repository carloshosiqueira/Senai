#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 9\n\n");
	int n, i;
	printf("Escreva n�mero 10 n�meros: ");
	scanf("%d",&n);
	for(i = 1; i < 10; i++){
		scanf("%d",&n);
	}
		
	return 0;
}
