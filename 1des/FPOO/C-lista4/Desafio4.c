#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	
	char produto[5][30],continuar[3];
	float preco[5];
	int i, caropreco, baratopreco, barato, caro;
	
	
	printf("Digite o nome do produto e seu preço:\n");
	caropreco = 0;
	baratopreco = 99999999;
	for(i = 0; i < 5; i++){
		scanf("%s %f",&produto[i], &preco[i]);
        if (caropreco < preco[i]){
          	 	caropreco = preco[i];
           		caro = i;
           	}
        if (baratopreco > preco[i]) {
        		baratopreco = preco[i];
        		barato = i;
    	}
	}
	for(i = 0; i < 5; i++){
		printf("\n%s:R$%.2f\n",produto[i], preco[i]);
	}
	printf("\nO produto %s é o mais caro com um valor de %.2f\n",produto[caro], caropreco);
	printf("O produto %s é o mais barato com um valor de %.2f\n",produto[barato], baratopreco);

//	if(preco[0] > preco[1] && preco[0] > preco[2] && preco[0] > preco[3] && preco[0] > preco[4])
//		printf("O mais caro é o produto %s com um valor de R$%.2f\n",produto[0], preco[0]);
//	else if(preco[1] > preco[0] && preco[1] > preco[2] && preco[1] > preco[3] && preco[1] > preco[4])
//		printf("O mais caro é o produto %s com um valor de R$%.2f\n",produto[1], preco[1]);
//	else if(preco[2] > preco[0] && preco[2] > preco[1] && preco[2] > preco[3] && preco[2] > preco[4])
//		printf("O mais caro é o produto %s com um valor de R$%.2f\n",produto[2], preco[2]);
//	else if(preco[3] > preco[0] && preco[3] > preco[1] && preco[3] > preco[2] && preco[3] > preco[4])
//		printf("O mais caro é o produto %s com um valor de R$%.2f\n",produto[3], preco[3]);
//	else if(preco[4] > preco[0] && preco[4] > preco[1] && preco[4] > preco[2] && preco[4] > preco[3])
//		printf("O mais caro é o produto %s com um valor de R$%.2f\n",produto[4], preco[4]);
//		
//	if(preco[0] < preco[1] && preco[0] < preco[2] && preco[0] < preco[3] && preco[0] < preco[4])
//		printf("O mais barato é o produto %s com um valor de R$%.2f\n",produto[0], preco[0]);
//	else if(preco[1] < preco[0] && preco[1] < preco[2] && preco[1] < preco[3] && preco[1] < preco[4])
//		printf("O mais barato é o produto %s com um valor de R$%.2f\n",produto[1], preco[1]);
//	else if(preco[2] < preco[0] && preco[2] < preco[1] && preco[2] < preco[3] && preco[2] < preco[4])
//		printf("O mais barato é o produto %s com um valor de R$%.2f\n",produto[2], preco[2]);
//	else if(preco[3] < preco[0] && preco[3] < preco[1] && preco[3] < preco[2] && preco[3] < preco[4])
//		printf("O mais barato é o produto %s com um valor de R$%.2f\n",produto[3], preco[3]);
//	else if(preco[4] < preco[0] && preco[4] < preco[1] && preco[4] < preco[2] && preco[4] < preco[3])
//		printf("O mais barato é o produto %s com um valor de R$%.2f\n",produto[1], preco[1]);
	return 0;
	
}
