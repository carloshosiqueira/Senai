#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 7\n\n");
	int n, i;

	for(i = 0; i <= 100; i++){
		printf("Numero %d\n", i);
		n += i;
		printf("Pós conta %d\n", n);
	}
	printf("%d",n);
		
	return 0;
}
