#include <stdio.h>
int main(){
	char produto[50];
	float preco;
	float novopreco;
	//Entrada
	printf("Qual o produto que deseja ver o desconto? ");
	scanf("%s",&produto);
	printf("Quanto custa esse produto atualmente? ");
	scanf("%f",&preco);
	//Processamento
	novopreco = preco * 0.92;
	if(preco >= 1000)
		printf("O produto %s recebeu um desconto, e esta saindo pelo preco de: %.2f",produto, novopreco);
	else
		printf("O produto %s nao recebeu um desconto logo ainda custa %.2f reais",produto, preco);
}
