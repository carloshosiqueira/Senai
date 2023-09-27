#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	
	char produto[10][50];
	float preco[10], precocomdesconto[10], valordesconto[10], desconto;
	int i;

	printf("Qual a porcentagem de desconto que os produtos receberão? ");
	scanf("%f",&desconto);
	
	printf("Escreva o nome do produto e seu preço: ");
	
	for(i = 0; i < 10; i++){
		scanf("%s %f",&produto[i], &preco[i]);
		valordesconto[i] = preco[i] * desconto / 100;
		precocomdesconto[i] = preco[i] - valordesconto[i];
	}
	
	for(i = 0; i < 10; i++){
		printf("Produto:%s, Preço Original:R$%.2f, Desconto:%.2f, Preço Final:R$%.2f\n",produto[i], preco[i], valordesconto[i], precocomdesconto[i]);
	}
	for(i = 0; i < 10; i++){
		
	}



	return 0;
	
}
