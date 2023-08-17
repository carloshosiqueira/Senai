#include <stdio.h>
int main(){
	char produto[50];
	float preco;
	float novo_preco;
	printf("Qual o nome do produto? ");
	scanf("%s",&produto);
	printf("Quanto ele custa? ");
	scanf("%f",&preco);
	if(preco > 1000)
		novo_preco = preco * 0.92;
		printf("O preco de %s agora e de %.2f",produto, novo_preco);
	else
		printf("O preco de %s continua sendo de %.2f",produto, preco);
	
}
