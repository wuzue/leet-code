function searchInsert(nums, target) {//target = 5

  let left = 0; //inicial, começa valendo 0
  let right = nums.length - 1; // final, começa valendo o length de nums - 1
  //se nums = [1,3,5,6], right = 4 - 1, então right = 3
  
  while (left <= right) { //enquanto inicial left, for menor que final right
    let mid = left + Math.floor((right - left) / 2); // meio é igual a essa formula
    //então meio = 0 + ( 3 - 0 ) / 2, meio é igual à 1.
    if (nums[mid] === target) {//nums[mid] é igual à nums(1,3,5,6) no index de mid (1)
      //se nums[1], mesmo que nums[mid] for igual à target
      return mid;//retorna mid, que retornaria 1
    } else if (nums[mid] < target) {//se nums[mid], mesmo que nums[1] for menor que target 5
      left = mid + 1;// left 0 passa a ser igual a mid 1 + 1, então left = 2
    } else {//se nenhuma das condições acima forem cumpridas
      right = mid - 1;//right 3 passa a ser igual a mid 1 - 1, então right = 0 ????
    }
  }
  return left;
}
/*
MAIS EXPLICAÇÕES PQ ISSO AQUI TA UM CU PRA ENTENDER

A variável left é usada para manter o índice do início da faixa de pesquisa atual. 
Ela é inicializada com o valor de 0, o que significa que a pesquisa começa no primeiro elemento do array nums.

A variável right é usada para manter o índice do final da faixa de pesquisa atual. Ela é inicializada com o 
valor de nums.length - 1, o que significa que a pesquisa começa no último elemento do array nums.

O loop while é usado para realizar a pesquisa binária. Ele continua enquanto o índice do início da faixa de 
pesquisa for menor ou igual ao índice do final da faixa de pesquisa.

A variável mid é usada para armazenar o índice do elemento do meio da faixa de pesquisa atual. Ele é calculado 
como a média aritmética dos índices left e right, arredondando para baixo usando a função Math.floor(). Isso 
garante que a faixa de pesquisa sempre é dividida ao meio, independentemente do tamanho da faixa. 

O código dentro do if é executado se o elemento no índice mid for igual ao valor alvo. Nesse caso, o índice é retornado como resultado da função.

O código dentro do else if é executado se o elemento no índice mid for menor que o valor alvo. Nesse caso, a 
faixa de pesquisa é atualizada para incluir somente a metade direita do array (a partir do índice mid + 1). 
Isso é feito atualizando o valor da variável left para mid + 1.

O código dentro do else é executado se o elemento no índice mid for maior que o valor alvo. Nesse caso, a 
faixa de pesquisa é atualizada para incluir somente a metade esquerda do array (até o índice mid - 1). 
Isso é feito atualizando o valor da variável right para mid - 1.

Quando o loop while termina, significa que a faixa de pesquisa se esgotou sem encontrar o valor alvo. Nesse caso, a função retorna o valor da variável `left`

*/