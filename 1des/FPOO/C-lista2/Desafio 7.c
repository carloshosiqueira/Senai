#include <stdio.h>
int main(){
	
	int n1, n2, n3, n4, n5, temp;	
	
	printf("Insira os 5 numeros inteiros: ");
	scanf("%d %d %d %d %d",&n1, &n2, &n3, &n4, &n5);
	
	
	//Essa divis�o, decide o n5
	if(n1 > n2){
		temp = n1; //se 1 > 2 || o temp fica com o maior n�mero, e eu fa�o com que o n1 vire o n2 pois ele � o menor n�mero
		n1 = n2;
		n2 = temp; //n2 agora � o maior n�mero
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior n�mero
	}
		if(n3 > n4){
		temp = n3;
		n3 = n4;
		n4 = temp; //maior n�mero
	}
		if(n4 > n5){
		temp = n4;
		n4 = n5;
		n5 = temp; //maior n�mero
	}
	//Essa divis�o, decide o n4
		if(n1 > n2){
		temp = n1;
		n1 = n2;
		n2 = temp; //maior n�mero
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior n�mero
	}
		if(n3 > n4){
		temp = n3;
		n3 = n4;
		n4 = temp; //maior n�mero
	}
	//Essa divis�o decide o n3
		if(n1 > n2){
		temp = n1;
		n1 = n2;
		n2 = temp; //maior n�mero
	}
	if(n2 > n3){
		temp = n2;
		n2 = n3;
		n3 = temp; //maior n�mero
	}
	//Essa decide o n2 e o n1
	if(n1 > n2){
	temp = n1;
	n1 = n2;
	n2 = temp; //maior n�mero
	}

	printf("\n N�meros em ordem crescente:\n");
	printf("%d %d %d %d %d",n1, n2, n3, n4, n5);
	
	return 0;
	
}
