# CommunityFeedNextJS

Bienvenue sur **CommunityFeedNextJS** ! Il s'agit d'une application web conçue pour afficher une liste de questions liées à ReactJS depuis Stack Overflow API.

## Introduction

Cette application est construite avec Next.js et offre une interface simple pour visualiser les questions les plus récentes et les plus populaires sur ReactJS.

## Fonctionnalités principales

- **[Header](https://github.com/GuiFraV/CommunityFeedNextJS/blob/master/src/app/components/Header.js)** : Affiche le titre "Community Feed".

- **[Card](https://github.com/GuiFraV/CommunityFeedNextJS/blob/master/src/app/components/Card.js)** : Représente une question individuelle avec son titre, le nombre de vues et le nombre de réponses.

- **[Pagination](https://github.com/GuiFraV/CommunityFeedNextJS/blob/master/src/app/components/Pagination.js)** : Permet de naviguer entre les différentes pages de questions.

- **[Questions](https://github.com/GuiFraV/CommunityFeedNextJS/blob/master/src/app/questions/page.js)** : Affiche une liste de questions récupérées depuis l'API de Stack Overflow.

- **[QuestionDetail](https://github.com/GuiFraV/CommunityFeedNextJS/blob/master/src/app/questions/[id]/page.js)** : Affiche les détails d'une question spécifique lorsqu'on clique dessus.

## Comment ça marche ?

Lorsque vous accédez à l'application, elle récupère une liste de questions depuis l'API de Stack Overflow avec le tag "reactjs". Ces questions sont ensuite affichées sous forme de cartes. Vous pouvez cliquer sur une question pour voir ses détails ou utiliser la pagination pour naviguer entre les différentes pages.

## Conclusion

**CommunityFeedNextJS** est une application simple mais efficace pour rester à jour avec les questions les plus récentes et les plus populaires sur ReactJS depuis Stack Overflow. N'hésitez pas à contribuer ou à donner vos retours !
