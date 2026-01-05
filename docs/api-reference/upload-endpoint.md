# File Upload API

## POST /v1

This endpoint allows users to upload a file.

### Request

<CodeGroup>
  <CodeBlock language="http">
    POST /v1
    Content-Type: multipart/form-data
  </CodeBlock>
</CodeGroup>

### Parameters

<ParamField name="file" type="file" required>
The file to be uploaded.
</ParamField>

### Response

<CodeGroup>
  <CodeBlock language="json">
    {
      "message": "File uploaded successfully"
    }
  </CodeBlock>
</CodeGroup>

### Example

<CodeGroup>
  <CodeBlock language="javascript">
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/v1', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data));
  </CodeBlock>
</CodeGroup>