# Start from a base image with Python and required dependencies
FROM python:3.8-slim

# Copy the application code to the container
WORKDIR /app
COPY requirements.txt ./

# Install Python dependencies for your project
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expose the port on which the Flask app runs (for example, port 5000)
EXPOSE 4000

# Run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=4000"]
