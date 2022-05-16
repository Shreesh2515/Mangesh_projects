<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="XMLFileUpload.aspx.vb" Inherits="FileUpload_UsingVB.XMLFileUpload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h2>Select a file to upload</h2>
            <asp:FileUpload ID = "FileUpload1" Width="400px" Font-Size="11px" runat = "server" />
            <asp:Button ID="Button1" Text="Upload XML" Font-Size="11px" runat="server" OnClick="UploadXML" />
            <br />
            <asp:Literal ID="ltOne" runat="server" /> 
        </div>
    </form>
</body>
</html>
