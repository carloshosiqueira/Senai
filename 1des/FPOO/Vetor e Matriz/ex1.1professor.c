#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL, "");
	float n1, n2, n3, n4, n5;
	float media;
	char nome[20];
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	printf("Digite as 5 notas (de 0 a 10) do aluno: ");
	scanf("%f %f %f %f %f", &n1, &n2, &n3, &n4, &n5);
	//Processamento
	media = (n1+ n2 + n3 + n4 + n5) / 5;
	//Saída
	printf("As notas foram: %.1f %.1f %.1f %.1f %.1f \n", n1, n2, n3, n4, n5);
	printf("A média de %s é de %.1f ", nome, media);
	
	return 0;
}
