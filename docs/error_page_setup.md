# Custom Error Page Setup Guide

This guide explains how to use the Docker image `ghcr.io/tarampampam/error-pages:3.3.2` to serve custom error pages and how to integrate it with your web server.

## 1. Pull the Docker Image

First, pull the image from GitHub Container Registry:
```bash
docker pull ghcr.io/tarampampam/error-pages:3.3.2
```

## 2. Run the Container

For testing or deployment, run the container. For example, to run it on port 8080 on your host:
```bash
docker run -d -p 8080:80 ghcr.io/tarampampam/error-pages:3.3.2
```
This command starts the container in detached mode (`-d`) and maps port 80 in the container to port 8080 on your host.

You can verify that the container is running by opening your browser and navigating to [http://localhost:8080](http://localhost:8080). You should see the error page served by the container.

## 3. Integration with a Web Server

To serve these error pages as part of your application, you need to configure your web server (e.g., Nginx or Apache) to route error requests to this container.

### Example: Nginx Configuration

Below is a simple example of how you might configure Nginx to use the custom error page:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        # Your regular proxy_pass or root configuration here.
    }

    # Redirect 404 errors to our custom error page container
    error_page 404 /custom_404.html;

    location = /custom_404.html {
        proxy_pass http://localhost:8080;
    }

    # Similarly, you can define additional error pages (e.g., 500, 502)
    error_page 500 502 503 504 /custom_50x.html;
    location = /custom_50x.html {
        proxy_pass http://localhost:8080;
    }
}
```

Make sure to adjust the upstream address (`http://localhost:8080` here) as needed based on your environment.

## 4. Further Customization

- **Environment Variables:** Some Docker images might allow customization via environment variables. Check the image documentation (if available) for further adjustments.
- **Volume Mounting:** If you wish to override or customize the error pages, you might consider mounting your custom HTML files into the container. This depends on whether the container supports such overrides.

## Conclusion

By following these steps, you can quickly deploy a custom error page service using the `ghcr.io/tarampampam/error-pages:3.3.2` Docker image and integrate it with your web server to improve your user’s error experience.