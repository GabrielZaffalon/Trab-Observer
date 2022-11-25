Observer como o próprio nome já diz é um padrão que observa a ação do objeto antes de realizar 
algum evento, tornando o código mais efetivo e funcional, buscando resolver a questão do acoplamento,
problema muito comum em códigos grandes.

Ele funciona através de um "Subject" que seria como o objeto principal, e nisso também existe outros
objetos que podem ser variados, chamados "Observer", eles vão justamente observar o Subject, 
fazendo assim toda vez que o Subject alterar seu estado ele vai notificar os Observers que estiverem
interessados na informação, esses poderes de Subject e Observer podem ser dados ilimitadamente,
desde que os métodos aplicados estejam de forma correta

No dia a dia podemos ter como exemplo uma situação de um Repórter Freelance
quando existe alguma noticia nova, 3 grandes redes o procuram para fazer a cobertura da noticia, isso leva ao repórter e aos canais
perder tempo, por já ter outra rede o contatando, ou também pelo tempo que leva o repórter a falar com cada uma dessas redes.
Um método simples de resolver isso seria, quando chega a informação de uma noticia, o freelancer contata as redes interessadas
invés do contrario, ajudando a fazer uma experiência mais proveitosa. 

E isso seria o observer.