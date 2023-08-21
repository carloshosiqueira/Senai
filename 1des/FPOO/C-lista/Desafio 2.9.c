#include <stdio.h>
int main(){
	char nome[50];
	float preco;
	printf("Insira o nome da mercadoria: ");
	scanf("%s",&nome);
	printf("Insira o valor da mercadoria: ");
	scanf("%f",&preco);
	float novo_preco = preco * 1.05 ;
	printf("O novo preco de %s e de %.2f reais",nome,novo_preco);
}
