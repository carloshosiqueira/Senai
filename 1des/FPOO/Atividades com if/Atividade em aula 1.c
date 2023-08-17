#include <stdio.h>
int main(){
	int idade;
	int sexo;
	printf("Qual e a idade da pessoa? ");
	scanf("%d",&idade);
	printf("Como voce se identifica? 1.Homem 2.Mulher 3.Outro");
	scanf("%d",&sexo);
	if (sexo == 1){
	if (idade < 10) printf("Voce ainda e uma crianca");
	else if(idade < 15) printf("Voce ainda e um adolescente");
	else if(idade < 20) printf("Voce ainda e um jovem");
	else if(idade < 35)	printf("Voce ja e um adulto");
	else if(idade < 55) printf("Voce e da meia idade");
	else printf("Voce e um idoso");
	}
	else if (sexo == 2){
		if (idade < 10) printf("Voce ainda e uma crianca");
		else if(idade < 15) printf("Voce ainda e uma adolescente");
		else if(idade < 20) printf("Voce ainda e uma jovem");
		else if(idade < 35)	printf("Voce ja e uma adulta");
		else if(idade < 55) printf("Voce e da meia idade");
		else printf("Voce e uma idosa");
	}
	else if(sexo == 3){
		if (idade < 10) printf("Voce ainda e uma crianca");
		else if(idade < 15) printf("Voce ainda e uma adolescente");
		else if(idade < 20) printf("Voce ainda e uma jovem");
		else if(idade < 35)	printf("Voce ja e uma adulta");
		else if(idade < 55) printf("Voce e da meia idade");
		else printf("Voce e uma idosa");
	}
	else{
			printf("Opcao invalida");
	}
}
	

