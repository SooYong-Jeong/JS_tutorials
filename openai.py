from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.environ['OPENAI_API_KEY']
print(API_KEY)

# assistant = client.beta.assistants.create(
#     name="Math Tutor",
#     instructions="You are a personal math tutor. Write and run code to answer math questions.",
#     tools=[{"type": "code_interpreter"}],
#     model="gpt-4-1106-preview"
# )