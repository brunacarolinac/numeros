 // Gerar um número aleatório entre 1 e 100
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        
        function checkGuess() {
            // Obter o valor inserido pelo usuário
            var guess = parseInt(document.getElementById('guess-input').value);
            
            // Verificar se o valor inserido é válido
            if (isNaN(guess) || guess < 1 || guess > 20) {
                document.getElementById('result').innerHTML = "Por favor, insira um número válido entre 1 a 20.";
            } else {
                // Comparar o valor inserido com o número aleatório
                if (guess === randomNumber) {
                    document.getElementById('result').innerHTML = "Parabéns! Você adivinhou o número corretamente.";
                } else if (guess < randomNumber) {
                    document.getElementById('result').innerHTML = "Tente um número maior.";
                } else {
                    document.getElementById('result').innerHTML = "Tente um número menor.";
                }
            }
        }