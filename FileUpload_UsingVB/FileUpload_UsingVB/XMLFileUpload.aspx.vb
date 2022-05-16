Imports System.IO
Imports System.Data
Imports System.Configuration
Imports System.Data.SqlClient
Public Class XMLFileUpload
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'first comment added now
    End Sub

    Protected Sub UploadXML(sender As Object, e As EventArgs) Handles Button1.Click
        Dim fileName As String = Path.GetFileName(FileUpload1.PostedFile.FileName)
        Dim filePath As String = Server.MapPath("~/Uploads/") & fileName
        FileUpload1.SaveAs(filePath)
        Dim xml As String = File.ReadAllText(filePath)
        Dim constr As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
        Using con As New SqlConnection(constr)
            Using cmd As New SqlCommand("InsertXMLFileUpload")
                cmd.Connection = con
                cmd.CommandType = CommandType.StoredProcedure
                cmd.Parameters.AddWithValue("@xml", xml)
                con.Open()
                cmd.ExecuteNonQuery()
                con.Close()
            End Using
        End Using
        Me.ltOne.Text = "File Uploaded Successfully"
    End Sub
End Class