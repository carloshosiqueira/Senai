#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	
	FILE *arquivo;
	char str[80];
	int n[10], soma = 0, i;
	
	arquivo = fopen("dados.txt","r");
		if(arquivo == NULL)
			printf("Erro, não foi possível abrir o arquivo\n");
	else{
		while((fgets(str, 40, arquivo))!= NULL){
			
			
			printf("Os números são:\n%s\n", str);
			
			n[0] = atoi(strtok(str," "));
			soma += n[0]; //coloquei isso aq para a soma ficar certinha, ele tava começando a soma do n[1] :)
			
			for(i = 1; i <10; i++){
			
			n[i] = atoi(strtok(NULL," "));
			soma +=  n[i];
			
		}
			
		printf("Soma dos números = %d",soma);
			
			
	}
	fclose(arquivo);
	
	return 0;
	
	}
}

