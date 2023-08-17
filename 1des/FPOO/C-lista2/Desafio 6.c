#include <stdio.h>
int main(){
	//Ainda está incompleto
	int a, b, c, d, e, f;
	printf("Insira os 6 numeros inteiros: ");
	scanf("%d",&a);
	scanf("%d",&b);
	scanf("%d",&c);
	scanf("%d",&d);
	scanf("%d",&e);
	scanf("%d",&f);
	if(a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
	else if (b < a < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,a,b);
	else if (b < c < a < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,a,c,b);
	else if (b < c < d < a < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,a,d,c,b);
	else if (b < c < d < e < a < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,a,e,d,c,b);
	else if (b < c < d < e < f < a) printf("O maior valor digitado e de: %d%d%d%d%d%d",a,f,e,d,c,b);
	//Só pra separar letra por letra para não confundir
	else if (b < a < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,a,b);
	else if (a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
	else if (a < c < b < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,b,c,a);
	else if (a < c < d < b < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,b,d,c,a);
	else if (a < c < d < e < b < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,b,e,d,c,a);
	else if (a < c < d < e < f < b) printf("O maior valor digitado e de: %d%d%d%d%d%d",b,f,e,d,c,a);
	//Só pra separar letra por letra para não confundir
	else if (c < a < b < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,b,a,c);
	else if (a < c < b < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,b,c,a);
	else if (a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
	else if (a < b < d < c < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,c,d,b,a);
	else if (a < b < d < e < c < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,c,e,d,b,a);
	else if (a < b < d < e < f < c) printf("O maior valor digitado e de: %d%d%d%d%d%d",c,f,e,d,b,a);
	//Só pra separar letra por letra para não confundir
	else if (d < a < b < c < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,c,b,a,d);
	else if (a < d < b < c < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,c,b,d,a);
	else if (a < b < d < c < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,c,d,b,a);
	else if (a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
	else if (a < b < c < e < d < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,d,e,c,b,a);
	else if (a < b < c < e < f < d) printf("O maior valor digitado e de: %d%d%d%d%d%d",d,f,e,c,b,a);
	//Só pra separar letra por letra para não confundir
	else if (e < a < b < c < d < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,d,c,b,a,e);
	else if (a < e < b < c < d < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,d,c,b,e,a);
	else if (a < b < e < c < d < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,d,c,e,b,a);
	else if (a < b < c < e < d < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,d,e,c,b,a);
	else if (a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
	else if (a < b < c < d < f < e) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,f,d,c,b,a);
	//Só pra separar letra por letra para não confundir
	else if (f < a < b < c < d < e) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,d,c,b,a,f);
	else if (a < f < b < c < d < e) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,d,c,b,f,a);
	else if (a < b < f < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,d,c,f,b,a);
	else if (a < b < c < f < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,d,f,c,b,a);
	else if (a < b < c < d < f < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",e,f,d,c,b,a);
	else if (a < b < c < d < e < f) printf("O maior valor digitado e de: %d%d%d%d%d%d",f,e,d,c,b,a);
}
