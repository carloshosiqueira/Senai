/*11 Uma loja est� fazendo uma promo��o e precisa de ajuda no momento da venda, para liberar os descontos. 
Baseado na pe�a, calcule o desconto e exiba o valor final da venda. (camisa - 20% de desconto,
 bermuda - 10% de desconto, cal�a - 15% de desconto).
*/
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	//Variaveis
	float preco, precocal, precob, precocam;
	int produto, quantidade;
	//Entrada
	printf("Qual o produto que voc� deseja comprar? 1.camisa 2.cal�a 3.bermuda: ");
	scanf("%d",&produto);
	//Processamento e saida
	if(produto == 1){
		printf("Quanto custa a camisa em R$?\n");
		scanf("%f",&preco);
		precocam = preco * 0.80;
		printf("A Camisa com desconto custa R$%.2f\n",precocam);
		printf("Quantas camisas deseja comprar? ");
		scanf("%d",&quantidade);
		preco = precocam * quantidade;
		printf("A compra saiu pelo valor de R%$%.2f",preco);
	}
	else if(produto == 2){
		printf("Quanto custa a cal�a em R$?\n");
		scanf("%f",&preco);
		precocal = preco * 0.85;
		printf("A cal�a com desconto custa R$%.2f\n",precocal);
		printf("Quantas cal�as deseja comprar? ");
		scanf("%d",&quantidade);
		preco = precocal * quantidade;
		printf("A compra saiu pelo valor de R%$%.2f",preco);
	}
	else if(produto == 3){
		printf("Quanto custa a bermuda? em R$?\n");
		scanf("%f",&preco);
		precob = preco * 0.90;
		printf("A bermuda com desconto custa R$%.2f\n",precob);
		printf("Quantas bermudas deseja comprar? \n");
		scanf("%d",&quantidade);
		preco = precob * quantidade;
		printf("A compra saiu pelo valor de R%$%.2f",preco);
	}
}
