<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="FindUploadedDataXML.aspx.vb" Inherits="FileUpload_UsingVB.FindUploadedDataXML" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        <table width="100%">
            <tr>
                <td>
                    Search :<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    <asp:Button ID="Button1" runat="server" Text="Search" onclick="Button1_Click" />
                </td>
            </tr>
            <tr>
                <td>
                    <asp:GridView ID="GridView1" runat="server" Width="100%">
                    </asp:GridView>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
