# Solar Wallet Website

## Setup

Make sure to install the `now` CLI and login:

```sh
npm i -g now
now login andy@satoshipay.io
```

## Deploy

```sh
npm run deploy
```

It will print the immutable deployment URL and copy it to the clipboard.

To make this new deployment available as `solarwallet.io`, run:

```sh
now alias solarwalletio-<Deployment ID> solarwallet.io
```


## Manage deployments

```sh
now ls
```

```sh
now alias ls
```

