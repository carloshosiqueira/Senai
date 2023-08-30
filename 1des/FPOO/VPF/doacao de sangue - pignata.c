#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"");
	
	int n;
	
	printf("Escreva a quantidade de doadores: ");
	scanf("%d",&n);
	
	char nome[n][20], sexo[n];
	int idade[n], dias[n], i;
	
	for(i = 0; i < n; i++){
		printf("Digite o nome do doador %d: ",i + 1);
		scanf("%s",&nome[i]);
		
		printf("Digite a idade do doador %d: ",i + 1);
		scanf("%d",&idade[i]);
		
		printf("Digite o sexo do doador (M/F)%d: ",i + 1);
		scanf("%s",&sexo[i]);
		
		printf("Digite os dias desde a ultima doação do doador %d: ",i + 1);
		scanf("%d",&dias[i]);
		
		printf("----------------------------------------------------------------------------\n");
	}
	
	
	printf("Relatório de doadores\n");
	
	for(i = 0; i < n; i++){
		char status[n][10];
		
		if((sexo[i] == 'M' || sexo[i] == 'm') && dias[i] >= 60){
			strcpy(status[i],"Apto");
		}else if((sexo[i] == 'F' || sexo[i] == 'f') && dias[i] >= 90){
			strcpy(status[i],"Apto");
		}else{
			strcpy(status[i],"Inapto");
		}
		
		printf("Nome: %s\n",nome[i]);
		printf("Sexo: %c\n",sexo[i]);
		printf("Status: %s\n\n",status[i]);
	}
	
	return 0;
	
}
