FROM alpine:latest

WORKDIR /app

# Copy PocketBase binary
COPY pocketbase /app/pocketbase

# Give execute permission
RUN chmod +x /app/pocketbase

EXPOSE 8080

CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080"]
