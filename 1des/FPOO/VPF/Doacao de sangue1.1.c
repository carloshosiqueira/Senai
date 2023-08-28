#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	//Declaração de variáveis
	char nome[30];
	int i, doadores, idade, sexo, dias, continuar;
	
	do{
		printf("Quantos doadores tiveram no dia? ");
		scanf("%d",&doadores);
		
		for(i = 0; i < doadores; i++){
			printf("Qual o nome do paciente? ");
			scanf("%s", &nome);
			printf("Qual o sexo? 1.Masculino 2.Feminino: ");
			scanf("%d",&sexo);
			printf("Quantos anos tem? ");
			scanf("%d",&idade);
			printf("Quanto tempo faz desde a última doação de sangue em dias? ");
			scanf("%d",&dias);
			switch(sexo){
				case 1:
					printf("%s é um homem de %d anos e que faz %d dias que não faz doação de sangue, logo:\n\n\n",nome, idade, dias);
					if(idade < 16 || idade > 69 || dias < 60){
						printf("%s está INAPTO\n",nome);
						printf("A doação de sangue só é permitida a partir de 16 anos com a permissão dos pais com uma idade máxima de 69 anos\n");
						printf("Também é necessário um tempo de 60 dias entre uma doação de sangue e outra\n\n");
					}
					if(idade >= 16 && idade <= 69 && dias >= 60){
						printf("%s está APTO para doar sangue, obrigado pela cooperação\n\n",nome);
					}
				break;
				case 2:
					printf("%s é uma mulher de %d anos e que faz %d dias que não faz doação de sangue, logo:\n\n\n",nome, idade, dias);
					if(idade < 16 || idade > 69 || dias < 90){
						printf("%s está INAPTA\n",nome);
						printf("A doação de sangue só é permitida a partir de 16 anos com a permissão dos pais com uma idade máxima de 69 anos\n");
						printf("Também é necessário um tempo de 90 dias entre uma doação de sangue e outra\n\n");
					}
					if(idade >= 16 && idade <= 69 && dias >= 90){
						printf("%s está APTA para doar sangue, obrigado pela cooperação\n\n",nome);
					}
				break;
				default:
					printf("Por favor insira 1 ou 2 para o sexo\n\n");
			}
	}
	
	printf("\nDeseja prosseguir com a próxima lista? Digite 1 para continuar e 0 para sair\n");
	scanf("%d",&continuar);
	
}while(continuar == 1);

	return 0;
}

