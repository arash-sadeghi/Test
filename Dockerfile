FROM denoland/deno:alpine
WORKDIR /app
COPY main.ts .
RUN deno cache main.ts
EXPOSE 5000
CMD ["run", "--allow-net", "main.ts"]
