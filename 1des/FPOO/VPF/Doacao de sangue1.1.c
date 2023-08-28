#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	//Declara��o de vari�veis
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
			printf("Quanto tempo faz desde a �ltima doa��o de sangue em dias? ");
			scanf("%d",&dias);
			switch(sexo){
				case 1:
					printf("%s � um homem de %d anos e que faz %d dias que n�o faz doa��o de sangue, logo:\n\n\n",nome, idade, dias);
					if(idade < 16 || idade > 69 || dias < 60){
						printf("%s est� INAPTO\n",nome);
						printf("A doa��o de sangue s� � permitida a partir de 16 anos com a permiss�o dos pais com uma idade m�xima de 69 anos\n");
						printf("Tamb�m � necess�rio um tempo de 60 dias entre uma doa��o de sangue e outra\n\n");
					}
					if(idade >= 16 && idade <= 69 && dias >= 60){
						printf("%s est� APTO para doar sangue, obrigado pela coopera��o\n\n",nome);
					}
				break;
				case 2:
					printf("%s � uma mulher de %d anos e que faz %d dias que n�o faz doa��o de sangue, logo:\n\n\n",nome, idade, dias);
					if(idade < 16 || idade > 69 || dias < 90){
						printf("%s est� INAPTA\n",nome);
						printf("A doa��o de sangue s� � permitida a partir de 16 anos com a permiss�o dos pais com uma idade m�xima de 69 anos\n");
						printf("Tamb�m � necess�rio um tempo de 90 dias entre uma doa��o de sangue e outra\n\n");
					}
					if(idade >= 16 && idade <= 69 && dias >= 90){
						printf("%s est� APTA para doar sangue, obrigado pela coopera��o\n\n",nome);
					}
				break;
				default:
					printf("Por favor insira 1 ou 2 para o sexo\n\n");
			}
	}
	
	printf("\nDeseja prosseguir com a pr�xima lista? Digite 1 para continuar e 0 para sair\n");
	scanf("%d",&continuar);
	
}while(continuar == 1);

	return 0;
}

