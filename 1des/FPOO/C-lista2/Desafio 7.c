#include <stdio.h>
int main(){
	
	int n1, n2, n3, n4, n5, temp;	
	
	printf("Insira os 5 numeros inteiros: ");
	scanf("%d %d %d %d %d",&n1, &n2, &n3, &n4, &n5);
	
	
	//Essa divisão, decide o n5
	if(n1 > n2){
		temp = n1; //se 1 > 2 || o temp fica com o maior número, e eu faço com que o n1 vire o n2 pois ele é o menor número
		n1 = n2;
		n2 = temp; //n2 agora é o maior número
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior número
	}
		if(n3 > n4){
		temp = n3;
		n3 = n4;
		n4 = temp; //maior número
	}
		if(n4 > n5){
		temp = n4;
		n4 = n5;
		n5 = temp; //maior número
	}
	//Essa divisão, decide o n4
		if(n1 > n2){
		temp = n1;
		n1 = n2;
		n2 = temp; //maior número
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior número
	}
		if(n3 > n4){
		temp = n3;
		n3 = n4;
		n4 = temp; //maior número
	}
	//Essa divisão decide o n3
		if(n1 > n2){
		temp = n1;
		n1 = n2;
		n2 = temp; //maior número
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior número
	}
	//Essa decide o n2 e o n1
	if(n1 > n2){
	temp = n1;
	n1 = n2;
	n2 = temp; //maior número
	}

	printf("\n Números em ordem crescente:\n");
	printf("%d %d %d %d %d",n1, n2, n3, n4, n5);
	
	return 0;
	
}
