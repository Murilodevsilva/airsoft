import React from "react";
import { TextInput, View,Text, TouchableOpacity ,Modal,ScrollView, Alert } from 'react-native';
import Logo from "../../../assets/svg/logo";
import { useNavigation } from "@react-navigation/native";
import CheckBoxIcon from '../../../assets/svg/checkboxtrue'
import { useState } from "react";
import firebaseConfig from "../../Config/firebase";

import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
import { auth } from "../../Config/firebase";



export default SignUp = () =>{
    const navigation = useNavigation()
    const [isTrue, setIsTrue] = React.useState(false);
    const [visible,setVisible] = useState(false);
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

const handleRegister = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser)
      
        .then(() => {
            alert('Enviamos um email para confirmação!'+
                    'Verifique sua caixa de entrada!')
                    navigation.navigate('Verification')
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     alert('Preencha os campos corretamente!')
    });
}    
    
return(
    <View style={{backgroundColor:'#18191A',flex:1,width:'100%',justifyContent:'center',alignItems:'flex-start',paddingLeft:40}}>
        <View style={{alignSelf:'center',marginLeft:-30,marginBottom:21}}><Logo/></View>
        
        
        
        <Text style={{fontSize:24,color:'#FFF',fontWeight:'700',fontFamily:'Roboto'}}>
        Crie sua conta
        </Text>
        <Text style={{fontSize:15,fontWeight:300,color:'#FFF'}}>
        Digite seus dados para iniciar
        </Text>
        <View style={{top:19,left:22,backgroundColor:'#18191A',width:42,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
            Email
        </Text>
        </View>
        
        <TextInput
        onChangeText={(t)=>setEmail(t)} 
        value={email} 
        placeholder="Digite seu e-mail de acesso"
        placeholderTextColor={'#7777'}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:5,marginTop:8,color:'#A6A7AB'}}/>
        <View style={{top:19,left:22,backgroundColor:'#18191A',width:102,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Nome de guerra
        </Text>
        </View>
        <TextInput 
        placeholderTextColor={'#7777'}
    placeholder="Como você quer ser chamado ?"
        style={{paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:5,marginTop:8,color:'#A6A7AB'}}/>
        <View style={{top:19,left:22,backgroundColor:'#18191A',width:42,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
            Senha
        </Text>
        </View>
        <TextInput 
        onChangeText={(t)=>setPassword(t)} 
        value={password} 
        placeholder="Digite sua senha de acesso"
        placeholderTextColor={'#7777'} 
        keyboardType="number-pad"
        secureTextEntry={true}
        
        style={{paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:5,marginTop:8,color:'#A6A7AB'}}/>
        <View style={{top:30 ,left:22,backgroundColor:'#18191A',width:104,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Confirmar senha 
        </Text>
        </View>
<TextInput
placeholder="Digite sua senha de acesso"
placeholderTextColor={'#7777'} 
keyboardType="number-pad"
secureTextEntry={true}

style={{paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:5,marginTop:20,marginBottom:8,color:'#A6A7AB'}}/>
<View style={{flexDirection:'row',alignItems:'center',marginBottom:24}}>


<TouchableOpacity onPress={() => setIsTrue(!isTrue)} style={{marginRight:10}}>
      {isTrue ? (
        <CheckBoxIcon/>
      ) : (
        <View style={{ width: 18, height: 18,borderWidth:1,borderColor:'#A6A7AB',margin:2,borderRadius:3}} />
      )}
    </TouchableOpacity>

 <Text style={{color:'#FFF',marginRight:5}}>Aceito os</Text><TouchableOpacity onPress={()=>setVisible(true)}><Text style={{color:'#2374e1'}}>termos e condiçoes de uso.</Text></TouchableOpacity>
</View>
<TouchableOpacity onPress={() => {
    if (isTrue) {
      handleRegister();
}else{alert('Você precisa aceitar os termos!')}}} style={{width:345,height:51,backgroundColor:'#2374E1',justifyContent:'center',borderRadius:5}}>
    <Text style={{color:'#FFF',fontSize:18,textAlign:'center',marginBottom:5}}>Criar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={{width:345,height:51,borderWidth:1,borderColor:'#2374E1',justifyContent:'center',borderRadius:5,marginTop:20}}>
    <Text style={{color:'#2374E1',fontSize:18,textAlign:'center',marginBottom:5}}>Voltar</Text>
</TouchableOpacity>

{visible && <Modal
visible={true}
transparent={true}
animationType="slide"
>
    <View style={{backgroundColor:'#000',width:'100%',height:800,paddingLeft:20,paddingRight:20}}>
        <Text style={{color:'#FFF',fontSize:24,paddingBottom:12}}>Termos e condições de uso</Text>
        <ScrollView><Text style={{color:'#FFF',paddingBottom:20}}>CONTRATO DO USUÁRIO</Text>
<Text style={{color:'#FFF'}}>
A Administração do Airsoft Commander recomenda que você leia estes termos e condições de uso. Ao visitar ou usar o aplicativo, você concorda com as obrigações estabelecidas neste documento. Caso não concorde com todas as condições, deverá abster-se de utilizar o aplicativo.
</Text>
<Text style={{color:'#FFF',paddingBottom:12,paddingTop:12}}>
1. Termos e definições
</Text>
<Text style={{color:'#FFF'}}>
1.1. Para os fins deste Contrato do Usuário, os seguintes termos têm os seguintes significados:
Aplicativo - recurso da Internet localizado na Internet em http://www.airsoftcommander.com ou lojas Google Play e Apple Store. Dependendo do contexto, também significa o software do Aplicativo, o design (design gráfico) do Aplicativo, o Banco de Dados, qualquer seção (subseção) do aplicativo, bem como as Informações publicadas no mesmo pela Administração do Aplicativo e/ou área comercial e suporte.
Administração do Aplicativo - Os administradores do recurso da Internet http://www.airsoftcommander.com, que possuem todos os direitos de propriedade exclusivos relevantes do aplicativo, incluindo os direitos do nome de domínio do aplicativo e sua administração.
Usuário - uma pessoa que passou no procedimento de registro, recebeu um login e senha individuais e também possui seu próprio perfil. Para efeitos do Contrato do Usuário, entende-se também por Usuário a pessoa que não passou no procedimento de registo, mas que acede ao aplicativo e/ou o utiliza e/ou o utilizou. Qualquer pessoa que acesse o aplicativo confirma que concorda com as obrigações estabelecidas por este Contrato do Usuário.
Perfil/Perfil do Usuário - Informações pessoais sobre o Usuário, bem como outras informações que somente este Usuário pode publicar. Qualquer Usuário tem o direito de ter apenas um Perfil.
Informações pessoais do usuário - qualquer informação que o usuário forneça sobre si mesmo ao se registrar (criando um perfil de usuário) ou no processo de uso do aplicativo, incluindo dados pessoais do usuário, informações que são transferidas automaticamente para a administração do aplicativo no processo de uso o Aplicativo com a ajuda do software instalado no dispositivo do Usuário, incluindo endereço IP, informações sobre os cookies, navegador do Usuário, bem como outros dados sobre o Usuário.
Informações - qualquer informação postada pelo usuário ou pela administração do aplicativo no aplicativo, incluindo informações pessoais do usuário, links para outros aplicativos ou sites, mensagens de texto, etc.
Banco de dados - uma coleção de informações postadas no Aplicativo. Todas as Informações publicadas no Aplicativo, bem como a seleção, agrupamento e colocação de Informações, são propriedade intelectual da Administração do Aplicativo e (ou) de outros detentores de direitos autorais.
Publicidade não autorizada - publicidade que não é acordada com a Administração do recurso.
Editor de eventos de jogos - parte do aplicativo projetado para criar eventos de jogos.
Enredo do jogo - uma série de eventos organizados de acordo com certas regras, um esquema básico que inclui uma certa sequência de eventos.
Arena - um campo de treinamento onde o jogo está acontecendo.
Bug - inconsistência nas regras do jogo e na lógica do motor.{'\n'}
Quaisquer termos e conceitos usados no Contrato do Usuário e não refletidos na seção “Termos e Definições” serão interpretados de acordo com o significado do texto do Contrato do Usuário. Em caso de quaisquer imprecisões quanto à interpretação do termo e/ou conceito utilizado no Contrato do Usuário, será aplicada a interpretação determinada pela Administração do Aplicativo.
2. Assunto e conceitos gerais do Contrato do Usuário{'\n'}
2.1. Este Contrato do Usuário (doravante - o Contrato) estabelece as regras e condições para usar o Aplicativo e colocar Informações nele e é um acordo entre o Usuário e a Administração do Aplicativo, que substitui todos os acordos anteriores entre o Usuário e a Administração do Aplicativo.{'\n'}
2.2. O acesso ao Aplicativo, o uso do Aplicativo e/ou a realização de quaisquer outras ações no Aplicativo pelo Usuário, significa que o Usuário aceita e se compromete a cumprir todas as condições deste Contrato. O registro do Usuário no Aplicativo só é possível com a confirmação adicional da aceitação deste Contrato pelo Usuário.{'\n'}
3. Registro no Aplicativo{'\n'}
3.1. Para ter acesso a todos os recursos do Aplicativo, uma pessoa deve passar pelo procedimento de registro no Aplicativo - realizar uma série de ações sequenciais para preencher o formulário eletrônico de registro, passando pelo qual uma pessoa se torna um Usuário cadastrado e recebe login e senha individuais para acessar todas as funcionalidades básicas do Aplicativo.{'\n'}
3.2. O registo no Aplicativo é gratuito.{'\n'}
3.3. O usuário concorda em fornecer informações verdadeiras, precisas e completas. Informações sobre si mesmo no formulário de inscrição e manter essas informações atualizadas. Se alguma dessas informações for alterada, o Usuário concorda em alterá-la no Aplicativo o mais rápido possível. Ao mesmo tempo, o Usuário concorda que a Administração do Aplicativo normalmente não verifica a autenticidade das Informações Pessoais do Usuário e não monitora as informações e capacidades do Usuário.{'\n'}
3.4. A Administração do Aplicativo tem o direito de bloquear e/ou excluir o Perfil de um Usuário, recusar o acesso a todos ou alguns dos recursos do Aplicativo e excluir as Informações do Usuário sem dar motivos, inclusive no caso de o Usuário violar os termos do Contrato.{'\n'}
3.5. A Administração do Aplicativo reserva-se o direito de excluir uma conta que esteja inativa por mais de seis meses.{'\n'}
3.6. O Usuário tem o direito de se registrar novamente no Aplicativo.{'\n'}
3.7. Se o Usuário não receber o código necessário para ativar a conta, é obrigado a verificar a lixeira em seu servidor de e-mails. Em caso de mau funcionamento na conta de e-mails do Usuário, o Usuário tem o direito de anexar a conta a outra caixa de correio sem exigir a intervenção da Administração do Aplicativo.{'\n'}
4. Autorização no Aplicativo{'\n'}
4.1. O login e/ou senha individual do Usuário necessários para autorização no Aplicativo destina-se apenas a este Usuário.{'\n'}
4.2. Se qualquer pessoa além do Usuário estiver autorizada no Aplicativo usando o login e a senha do Usuário, todas as ações cometidas por essa pessoa serão consideradas como cometidas pelo próprio Usuário. O Usuário é o único responsável por todas as ações realizadas por ele no Aplicativo, bem como por todas as ações realizadas no Aplicativo por qualquer outra pessoa utilizando o nome de usuário e a senha do Usuário.{'\n'}
4.3. O Utilizador é o único responsável pela segurança da sua senha, bem como por todas as consequências que possam advir da sua utilização não autorizada e/ou outra.{'\n'}
5. Informações Pessoais do Usuário{'\n'}
5.1. Ao processar as Informações Pessoais do Usuário, a Administração do Aplicativo se compromete a tomar todas as medidas organizacionais e técnicas para proteger as Informações Pessoais do Usuário contra acesso não autorizado ou acidental, destruição, alteração, bloqueio, cópia, distribuição, bem como de outras ações ilegais de terceiros com isso. No entanto, devido a um mau funcionamento do Aplicativo, um ataque de vírus ou hacker, mau funcionamento técnico e outras circunstâncias, as Informações Pessoais do Usuário podem ficar disponíveis para outras pessoas. O Usuário entende isso e concorda que não fará uma reclamação à Administração do Aplicativo a esse respeito.{'\n'}
5.2. O Usuário concorda que suas Informações Pessoais contidas no Perfil do Usuário estão publicamente disponíveis, e qualquer Usuário do Aplicativo pode conhecê-las.{'\n'}
5.3. O Usuário concorda que a Administração do Aplicativo, armazene e execute outras ações para processar as Informações Pessoais do Usuário para os seguintes propósitos:{'\n'}
•	identificação de uma parte sob acordos e contratos com a Administração do Aplicativo;{'\n'}
•	comunicação com o Usuário, incluindo o envio de notificações, solicitações e informações sobre o uso do Aplicativo, os serviços, bem como o processamento de solicitações e aplicativos do Usuário;{'\n'}
•	melhorar a qualidade do Aplicativo, a conveniência de seu uso, o desenvolvimento de novos serviços;{'\n'}
•	realização de estudos estatísticos e outros com base em dados anônimos;{'\n'}
•	compilar um banco de dados de Usuários do Aplicativo.{'\n'}
5.4. Ao publicar Informações Pessoais no Aplicativo, o Usuário confirma que o faz voluntariamente, bem como que fornece voluntariamente essas Informações à Administração do Aplicativo.{'\n'}
5.5. O usuário concorda em não publicar as informações pessoais de outros usuários no aplicativo, e também não usar as informações pessoais de outros usuários que de alguma forma não atendam aos requisitos da legislação do Brasil, seja feito para fins ilegais ou ilícitos, para tirar proveito e para quaisquer outros fins que não correspondam aos propósitos do Aplicativo.{'\n'}
5.6. O Usuário pode a qualquer momento alterar (atualizar, editar) as Informações Pessoais fornecidas por ele ou parte delas.{'\n'}
5.7. As informações pessoais do usuário são processadas pela Administração do Aplicativo durante o período de sua existência no aplicativo ou o período estabelecido pela lei aplicável.{'\n'}
5.8. Sem prejuízo de outras disposições do Contrato, a Administração do Aplicativo tem o direito de transferir as Informações Pessoais do Usuário a terceiros nos seguintes casos:{'\n'}
•	o usuário expressou seu consentimento para tais ações;{'\n'}
•	a transferência é necessária como parte do uso do Aplicativo pelo Usuário ou para fornecer serviços ao Usuário;{'\n'}
•	a fim de proteger os direitos e interesses legítimos da Administração do Aplicativo ou de terceiros nos casos em que o Usuário viole os termos deste Contrato.{'\n'}
5.9. A Administração do Aplicativo não é responsável pelo uso das Informações Pessoais do Usuário por outras pessoas, incluindo pessoas para quem as Informações Pessoais do Usuário foram transferidas pela Administração do Aplicativo de acordo com a cláusula 5.8.{'\n'}
5.10. Ao processar os dados pessoais do Usuário, a Administração do Aplicativo é orientada por lei “Sobre a Proteção de Dados Pessoais”.{'\n'}
5.11. O usuário tem o direito de excluir Informações Pessoais sobre si mesmo da plataforma Airsoft Commander. Para fazer isso, entre em contato com o suporte em suporte@airsoftcommander.com e solicite a exclusão da conta. Geralmente esse processo pode levar até 7 dias. Se a conta for completamente excluída da plataforma Airsoft Commander, sua recuperação posterior é tecnicamente impossível. Por favor, escolha com cuidado.{'\n'}
6. Publicação das informações no Aplicativo{'\n'}
6.1. O usuário se compromete ao utilizar o Aplicativo:{'\n'}
•	não publicar ou enviar no Aplicativo as seguintes Informações:{'\n'}
o	caluniar, injuriar, difamar/degradar a honra e/ou dignidade de terceiros, contendo ameaças;{'\n'}
o	violar os direitos e interesses de terceiros protegidos por lei;{'\n'}
o	propagandear a discriminação de pessoas por motivos raciais, étnicos, de gênero, religiosos, status social, orientação sexual ou outros motivos;{'\n'}
o	contribuir e/ou apelar à mudança do sistema constitucional, à eclosão de guerras, ódios religiosos, raciais ou étnicos, contendo tentativas de incitação à hostilidade ou apelos à violência;{'\n'}
o	contendo materiais extremistas;{'\n'}
o	insultar sentimentos religiosos de outras pessoas;{'\n'}
o	informações criadas de acordo com os interesses de alguém que não atendam aos propósitos do Aplicativo;{'\n'}
o	outras informações que não estejam em conformidade com as leis brasileiras e/ou este Contrato.{'\n'}
•	não interferir no funcionamento normal do Aplicativo;{'\n'}
•	não distribuir e/ou utilizar quaisquer programas de computador, robôs ou outros algoritmos e métodos automáticos que visem a coleta, transferência ilegal, cópia, bloqueio, modificação, destruição de Informações e Banco de Dados, bem como visando contornar restrições estabelecidas pela Administração do Aplicativo;{'\n'}
•	não publicar ou distribuir publicidade no Aplicativo sem obter o consentimento prévio da Administração do Aplicativo;{'\n'}
•	não criar mais de um perfil de usuário;{'\n'}
•	para não duplicar um perfil existente, a Administração do Aplicativo reserva-se o direito de excluir contas duplicadas.{'\n'}
6.2. Em caso de disputa, o ônus da prova de que as Informações postadas pelo Usuário não violam os direitos de terceiros recai sobre o Usuário.{'\n'}
7. Regras do Local{'\n'}
Adicionalmente, ao utilizar o Aplicativo, o Utilizador compromete-se a:{'\n'}
7.1. Expresse adequadamente os pensamentos usando os recursos em português, espanhol, inglês e/ou outras línguas estrangeiras. No caso de uso de gírias/gírias insultuosas, a punição será aplicada - 2 advertências por um período de 1 ano.{'\n'}
7.2. É proibido publicar informações que contenham:{'\n'}
•	Um número excessivo de gírias, palavras ou expressões rudes e obscenas sem usar um método de criptografia especial (usando o sinal "*").{'\n'}
•	1 aviso é aplicado para cada violação. O prazo de advertência é de 1 ano.{'\n'}
•	Publicidade, ofertas comerciais que não são acordadas com a Administração do Aplicativo.{'\n'}
•	4 advertências são aplicadas para cada violação. O prazo de advertência é de 4 anos. A violação repetida será seguida pelo banimento permanente.{'\n'}
•	Insultos, ameaças, calúnias contra outros Usuários.{'\n'}
•	Objetos de caráter racista e/ou ódio étnico.{'\n'}
•	2 advertências são aplicadas para cada violação. O prazo de advertência é de 1 ano.{'\n'}
•	Propaganda política, religiosa e outras.{'\n'}
•	O banimento do perfil (4 avisos) é aplicado para a violação. O prazo de proibição é de 1 ano.{'\n'}
•	Chama - cruzando os limites da polidez em uma discussão.{'\n'}
•	1 aviso é aplicado para cada violação. O prazo de advertência é de 1 ano.{'\n'}
•	Flood - informações sem sentido ou insignificantes que não carregam uma carga semântica, ou seja, mensagens curtas como “uau”, “legal”, “+1”, etc.{'\n'}
•	1 aviso é aplicado para cada violação. O prazo de advertência é de 1 ano.{'\n'}
•	Sobrecitação - citação excessiva, excesso do volume do material citado sobre o texto original do autor da mensagem.{'\n'}
•	1 aviso é aplicado para cada violação. O prazo de advertência é de 1 ano.{'\n'}
•	Crossposting - postagem de tópicos do mesmo conteúdo por um autor.{'\n'}
•	1 aviso é aplicado para cada violação. O prazo de advertência é de 1 ano.{'\n'}
7.3. A Administração do Aplicativo dá ao Usuário a oportunidade de recorrer da decisão sobre a aplicação da penalidade - Banimento do Perfil.{'\n'}
7.4. Um login e/ou avatar que, na opinião da Administração do Aplicativo, seja considerado ofensivo ou impróprio pelos padrões morais, tenha claramente a intenção de desacreditar a identidade do moderador ou de outro Usuário/outra pessoa, pode ser deletado a qualquer tempo sem aviso.{'\n'}
7.5. É proibido aumentar a classificação do usuário por influência indevida no sistema.{'\n'}
O banimento do perfil (4 avisos) é aplicado para a violação. O prazo de proibição é de 1 ano.{'\n'}
7.7. Jogos no Aplicativo podem aparecer apenas na forma de eventos de jogos criados no editor interno do aplicativo.{'\n'}
8. Criando um evento de jogo{'\n'}
Algoritmo de design de jogos:{'\n'}
PASSO 1: Pense na sua ideia, desenhe e defina o enredo do jogo.{'\n'}
PASSO 2: Dê a sua jogo um nome.{'\n'}
PASSO 3: Crie um LOGLINE.{'\n'}
PASSO 5: Identifique os adversários e desenhe um jogo de acordo com o conflito e interesse esportivo.{'\n'}
PASSO 6: Determine e indique o objetivo principal do jogo, que motivará os jogadores a completarem as tarefas e atingirem o objetivo.{'\n'}
PASSO 7: Pense na implementação de ações e tarefas para atingir o objetivo principal. Cada tarefa deve estar ligada ao enredo e ser um obstáculo. A tarefa deve formar o enredo, o número de tarefas não é limitado. O título da tarefa deve ser consistente com a ação principal do enredo. Para a conveniência da modelagem abstrata da situação, recomenda-se visualizar o processo. Um dos métodos é a criação de "cartões": um cartão - uma tarefa (enredo). Você pode até criar um diagrama de jogo a partir de cartões de tarefas!{'\n'}
PASSO 8: Crie um jogo no editor interno do aplicativo.{'\n'}

9. Outras Disposições{'\n'}
9.1. A inação da Administração do Aplicativo em caso de violação de regras pelo Usuário não priva a Administração do Aplicativo do direito de tomar as medidas apropriadas para proteger seus interesses posteriormente, e também não significa que a Administração do Aplicativo omita seus direitos no caso de violações semelhantes subsequentes.{'\n'}
9.2 A Administração do Aplicativo não é responsável pelas Informações postadas pelo Usuário no Aplicativo.{'\n'}
9.3. Este Contrato pode ser alterado pela Administração do Aplicativo a qualquer momento sem qualquer aviso especial. A nova versão do Contrato entra em vigor a partir do momento da sua publicação no Aplicativo, salvo disposição em contrário da nova versão do Contrato.{'\n'}
</Text></ScrollView>
    </View>
    <View style={{backgroundColor:'#000'}}>
    <TouchableOpacity onPress={()=>setVisible(false)} style={{width:345,height:51,backgroundColor:'#2374E1',justifyContent:'center',borderRadius:5,alignSelf:'center',marginTop:26}}><Text style={{color:'#FFF',textAlign:'center'}}>Voltar</Text></TouchableOpacity>
    </View>
    </Modal>}

       
    </View>
)
}